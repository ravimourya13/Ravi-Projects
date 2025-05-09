const mongoose = require("mongoose");
const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

mongoose
  .connect("mongodb://localhost:27017/node_userinput")
  .then(() => {
    console.log("connected");
    showApp();
  })
  .catch((err) => {
    console.log(err);
  });

const empSchema = mongoose.Schema({
  id: Number,
  name: String,
  sal: Number,
});

const empModel = mongoose.model("emp", empSchema);

const showApp = () => {
  console.log("===Crud operations===");
  console.log("1. Insert emp");
  console.log("2. Update emp");
  console.log("3. Delete emp");
  console.log("4. show emp");
  console.log("5. exit app");

  rl.question("Enter your choice between (1-5): ", (key) => {
    switch (key) {
      case "1":
        addEmp();
        break;
      case "2":
        updateEmp();
        break;
      case "3":
        deleteEmp();
        break;
      case "4":
        showEmp();
        break;
      case "5":
        exitApp();
        break;
      default:
        console.log("Invalid input");
        showApp();
        break;
    }
  });
};

const addEmp = () => {
  rl.question("Enter id :", (id) => {
    rl.question("Enter name: ", (name) => {
      rl.question("Enter salary: ", async (sal) => {
        try {
          const data = new empModel({
            id: id,
            name: name,
            sal: sal,
          });

          const res = await data.save();
          console.log(res);
        } catch (err) {
          console.log(err.message);
        } finally {
          showApp();
        }
      });
    });
  });
};

const updateEmp = () => {
  rl.question("Enter id for update: ", (id) => {
    rl.question("Enter new salary: ", async (sal) => {
      try {
        const res = await empModel.updateOne(
          { id: id },
          { $set: { sal: sal } }
        );
        if (res.modifiedCount > 0) {
          console.log("updated successfully");
        } else {
          console.log("there is no employee with this id");
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        showApp();
      }
    });
  });
};

const deleteEmp = () => {
  rl.question("Enter id for delete employee: ", async (id) => {
    try {
      const res = await empModel.deleteOne({ id: id });
      if (res.deletedCount > 0) {
        console.log("deleted succesfully");
      } else {
        console.log("there is no emp with id");
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      showApp();
    }
  });
};

const showEmp = async () => {
  try {
    const res = await empModel.find();
    if (res.length > 0) {
      console.log(res);
    } else {
      console.log("there is no employee data");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    showApp();
  }
};

const exitApp = () => {
  rl.close();
  mongoose.connection.close();
  console.log("app is closed");
};

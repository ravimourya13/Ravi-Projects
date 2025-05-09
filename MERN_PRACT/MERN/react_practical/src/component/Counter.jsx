import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // Dynamic color based on count value
    const getCountColor = () => {
        if (count > 0) return "text-success";
        if (count < 0) return "text-danger";
        return "text-primary";
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <div className="col-md-6">
                <div className="card shadow-lg border-0 rounded-4 p-4 text-center">
                    <h2 className="fw-bold text-primary">Counter App</h2>
                    <p className={`fs-1 fw-bold ${getCountColor()} mt-3`}>{count}</p>

                    <div className="mt-4">
                        <button
                            onClick={() => setCount(count + 1)}
                            className="btn btn-success px-4 py-2 me-2 shadow-sm"
                        >
                            ➕ Increase
                        </button>

                        <button
                            onClick={() => setCount(count - 1)}
                            className="btn btn-danger px-4 py-2 me-2 shadow-sm"
                        >
                            ➖ Decrease
                        </button>

                        <button
                            onClick={() => setCount(0)}
                            className="btn btn-warning px-4 py-2 shadow-sm"
                        >
                            🔄 Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;

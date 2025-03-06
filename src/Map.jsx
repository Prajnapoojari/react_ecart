let data = [
    "Prajna",
    21,
    { name: "Sudee", age: 24 },
    { name1: "Savi", age1: 25, prsnl: { Married: "Yes", children: 1 } }
];

const Map = () => {
    return (
        <div>

            <h1>{data[0]}</h1>
            <h1>{data[1]}</h1>
            {data.map((item, index) => {
                // Check if the item is an object before trying to access properties
                if (typeof item === "object") {
                    return (
                        <div key={index}>
                            <h1>{item.name || "No Name"}</h1>
                            <h1>{item.name1 || "No Name1"}</h1>
                            <h1>{item.age || "No Age"}</h1>
                            <h1>{item.age1 || "No Age1"}</h1>

                            {/* Check if the object contains a nested object `prsnl` */}
                            {item.prsnl && (
                                <div>
                                    <h2>Married: {item.prsnl.Married}</h2>
                                    <h2>Children: {item.prsnl.children}</h2>
                                </div>
                            )}
                        </div>
                    );
                }
                return null; // Skip non-object elements in map()
            })}
        </div>
    );
};

export default Map;

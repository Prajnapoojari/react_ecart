const Emp = [
    { Eid: 101, Ename: "Prajna", Esalary: 80000 },
    { Dname: "Manager", Did: 1 },
    { Officename: "HP", Location: "Bangalore" }
];

const MapEmpArray = () => {
    return (
        <div className="container">
            {Emp.map((item, index) => (
                <div className="card" key={index}>
                    <h1>{item.Eid}</h1>
                    <h1>{item.Ename}</h1>
                    <h1>{item.Esalary}</h1>
                    <h1>{item.Dname}</h1>
                    <h1>{item.Did}</h1>
                    <h1>{item.Officename}</h1>
                    <h1>{item.Location}</h1>
                </div>
            ))}
        </div>
    );
};

export default MapEmpArray;

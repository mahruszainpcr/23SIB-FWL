import { useState, useEffect } from "react";

const UserCRUD = () => {
    const [Users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/users")
            .then((res) => res.json())
            .then((data) => {
                // Ensure the fetched data is correctly set
                setUsers(data);
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    const handleAdd = () => {
        if (email && username && phone && firstname && lastname) {
            const newUser = { email, username, phone, name: { firstname, lastname } };

            if (editIndex === null) {
                // Add new user
                setUsers([...Users, newUser]);
            } else {
                // Update existing user
                const updatedUsers = [...Users];
                updatedUsers[editIndex] = newUser;
                setUsers(updatedUsers);
                setEditIndex(null);
            }

            // Clear form fields after adding/updating
            setEmail("");
            setUsername("");
            setPhone("");
            setFirstname("");
            setLastname("");
        } else {
            alert("All fields are required.");
        }
    };

    const handleEdit = (index) => {
        const userToEdit = Users[index];
        setEmail(userToEdit.email);
        setUsername(userToEdit.username);
        setPhone(userToEdit.phone);
        setFirstname(userToEdit.name.firstname); // Access firstname correctly
        setLastname(userToEdit.name.lastname);   // Access lastname correctly
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        setUsers(Users.filter((_, i) => i !== index));
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-center mb-4">User Management</h1>
            <div className="p-4 mb-4 border rounded shadow">
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 w-full p-2 border rounded"
                />

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mb-2 w-full p-2 border rounded"
                />

                <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mb-2 w-full p-2 border rounded"
                />

                <input
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="mb-2 w-full p-2 border rounded"
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="mb-2 w-full p-2 border rounded"
                />

                <button
                    onClick={handleAdd}
                    className="w-full bg-blue-500 text-white py-2 rounded"
                >
                    {editIndex !== null ? "Update User" : "Add User"}
                </button>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">User List</h2>
                {Users.length === 0 ? (
                    <p>No users found.</p>
                ) : (
                    Users.map((USR, index) => (
                        <div
                            key={index}
                            style={{
                                padding: "10px",
                                border: "1px solid #ccc",
                                marginBottom: "8px",
                                borderRadius: "5px",
                            }}
                        >
                           <p style={{ fontWeight: "bold" }}>{USR.email}</p>
<p>UserName: {USR.username}</p>
<p>Phone: {USR.phone}</p>
<p>Name: {USR.name.firstname} {USR.name.lastname}</p> {/* Corrected to combine firstname and lastname */}
<div style={{ marginTop: "8px" }}>
    <button
        onClick={() => handleEdit(index)}
        style={{
            marginRight: "5px",
            backgroundColor: "orange",
            color: "white",
            padding: "5px",
            border: "none",
        }}
    >
        Edit
    </button>
    <button
        onClick={() => handleDelete(index)}
        style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px",
            border: "none",
        }}
    >
        Delete
    </button>
</div>

                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default UserCRUD;

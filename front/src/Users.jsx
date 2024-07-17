import { useEffect, useState } from "react";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { format } from "date-fns";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export function Users() {
    const [users, setUsers] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState({ id: null, name: '', email: '', phoneNumber: '' });

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        setUsers(data);
    };

    const removeUser = async (id) => {
        await fetch(`http://localhost:3000/user/${id}`, {
            method: "DELETE",
        });
        getAllUsers();
    };

    const modalToggle = (user) => {
        setSelectedUser(user);
        setModal(!modal);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedUser({ ...selectedUser, [name]: value });
    };

    const updateUser = async (e) => {
        e.preventDefault();

        const data = {
            name: selectedUser.name,
            email: selectedUser.email,
            phoneNumber: selectedUser.phoneNumber,
        };

        await fetch(`http://localhost:3000/user/${selectedUser.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        

        getAllUsers();
        modalToggle(); // Fechar modal após a atualização
    };

    const formatDate = (dateString) => {
        return format(new Date(dateString), "dd/MM/yyyy");
    };

    return (
        <section className="w-screen h-screen flex flex-col items-center justify-center gap-8 p-10 my-10">
            {users.map((user) => (
                <section key={user.id} className="bg-white font-bold w-9/12 flex items-center justify-between p-5 user-card rounded-md">
                    <div>
                        <span className="flex gap-3 items-center">
                            <FaUser />
                            <h2>{user.name}</h2>
                        </span>
                        <span className="flex gap-3 items-center">
                            <MdEmail />
                            <h2>{user.email}</h2>
                        </span>
                        <span className="flex gap-3 items-center">
                            <MdPhone />
                            <h2>{user.phoneNumber}</h2>
                        </span>
                        <h4 className="text-sm text-gray-400">Criado em: {formatDate(user.createdAt)}</h4>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => removeUser(user.id)}>
                            <FaTrashAlt color="red" />
                        </button>
                        <button onClick={() => modalToggle(user)}>
                        <TiEdit  />

                        </button>
                    </div>
                </section>
            ))}
            {modal && (
                <section className="p-10 bg-white z-10 relative rounded-md">
                    <button onClick={() => modalToggle()} className="absolute top-4 right-4">
                        <IoMdClose />
                    </button>
                    <form onSubmit={updateUser} className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={selectedUser.name}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Nome"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={selectedUser.email}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                                Telefone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phoneNumber"
                                value={selectedUser.phoneNumber}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Telefone"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Atualizar
                        </button>
                    </form>
                </section>
            )}
        </section>
    );
}

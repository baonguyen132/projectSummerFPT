import React, { useState } from "react";
import styles from "./user.module.scss";
import ItemUser from "../../../components/User/itemUser";
import FloatingButton from "../../../components/common/floatingButton/floatingButton";
import DialogCustome from "../../../components/common/Dialog/DialogCustome";
import FormSignUpUser from "../../../components/User/FormSignUpUser";
function User() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDialogOpen(true);
    if (handleClick) {
      handleClick();
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const user = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      dob: "1990-01-01",
      cid: "123456789",
      phone: "123-456-7890",
      address: "123 Main St, City, Country",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-10",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "User",
      status: "Inactive",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      dob: "1992-05-15",
      cid: "987654321",
      phone: "987-654-3210",
      address: "456 Elm St, City, Country",
      createdAt: "2023-02-01",
      updatedAt: "2023-02-10",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "User",
      status: "Active",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      dob: "1988-11-30",
      cid: "456789123",
      phone: "456-789-1230",
      address: "789 Oak St, City, Country",
      createdAt: "2023-03-01",
      updatedAt: "2023-03-10",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      role: "User",
      status: "Inactive",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      dob: "1995-07-20",
      cid: "321654987",
      phone: "321-654-9870",
      address: "321 Pine St, City, Country",
      createdAt: "2023-04-01",
      updatedAt: "2023-04-10",
    },
    {
      id: 5,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      dob: "1990-01-01",
      cid: "123456789",
      phone: "123-456-7890",
      address: "123 Main St, City, Country",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-10",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    description: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Handle form submission here
    onClose();
  };

  return (
    <div className={styles.userContainer}>
      {user.map((item) => (
        <ItemUser key={item.id} itemUser={item} />
      ))}

      <FloatingButton
        title="Tạo nhân viên mới"
        handleClick={() => {
          setIsDialogOpen(true);
        }}
      />

      {isDialogOpen && (
        <DialogCustome
          isOpen={isDialogOpen}
          onClose={closeDialog}
          title="Tạo nhân viên mới"
          handleSubmit={handleSubmit} 
        >
          <FormSignUpUser formData={formData} handleInputChange={handleInputChange} />
        </DialogCustome>
      )}
    </div>
  );
}

export default User;

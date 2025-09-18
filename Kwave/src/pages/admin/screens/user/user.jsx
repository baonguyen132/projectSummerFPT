import React, { useState, useEffect } from "react";
import styles from "./user.module.scss";
import Cookies from "js-cookie";
import ItemUser from "../../../../components/admin/User/ItemUser";
import FloatingButton from "../../../../components/common/admin/floatingButton/FloatingButton";
import DialogCustome from "../../../../components/common/admin/Dialog/DialogCustome";
import FormSignUpUser from "../../../../components/admin/User/FormSignUpUser";
import useFetchUsers from "../../../../hooks/useUser";
function User() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [data, setData] = useState([]);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const { users, loading, error } = useFetchUsers({ accessToken: Cookies.get("access_token"), dependencies: [] });

  useEffect(() => {
    if (users) {
      setData(users);
    }
  }, [users]);

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
    
    

    onClose();
  };
  return (
    <div className={styles.userContainer}>
      {data.map((item) => (
        <ItemUser key={item[0]} itemUser={item} />
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

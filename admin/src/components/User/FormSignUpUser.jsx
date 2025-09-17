import React from "react";
import styles from "./FormSignUpUser.module.scss";
import InputGroup from "../common/inputGroup/inputGroup";

function FormSignUpUser({formData,handleInputChange,}) {
  return (
    <>
      {/* Row 1: Name và Email */}
      <div className={styles.formRow}>
        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="name"
          icon="bx bx-user"
          label={"Full Name"}
        />

        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="email"
          icon="bx bx-envelope"
          label={"Email"}
        />
      </div>

      {/* Row 2: Role và Phone */}
      <div className={styles.formRow}>
        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="role"
          icon="bx bx-user"
          type="select"
          options={[
            { value: "Admin", label: "Admin" },
            { value: "Manager", label: "Manager" },
            { value: "User", label: "User" },
            { value: "Editor", label: "Editor" },
          ]}
          label={"Role"}
        />

        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="phone"
          icon="bx bx-phone"
          label={"Phone"}
        />
      </div>

      {/* Row 3: DOB và CID */}
      <div className={styles.formRow}>
        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="dob"
          icon="bx bx-calendar"
          type="date"
          label={"Date of Birth"}
        />
        <InputGroup
          formData={formData}
          handleChange={handleInputChange}
          name="cid"
          icon="bxr  bx-credit-card-front"
          type="text"
          label={"CID"}
        />
      </div>

      {/* Row 4: Address */}
      <InputGroup
        formData={formData}
        handleChange={handleInputChange}
        name="address"
        icon="bx bx-map"
        type="textarea"
        label={"Address"}
      />
    </>
  );
}

export default FormSignUpUser;

import React, { useState, useEffect } from "react";
import styles from "./test.module.scss";
import FloatingButton from "../../../../components/common/admin/floatingButton/FloatingButton";

import ItemTest from "../../../../components/admin/Test/ItemTest";
import TestDetail from "./testDetail";
import DialogCustome from "../../../../components/common/admin/Dialog/DialogCustome";
import CreateTest from "../../../../components/admin/Test/createTest";
import useFetchTests from "../../../../hooks/useTest"
import Cookies from "js-cookie";
import {
  handleCreateTest,
  handleDeleteTest,
} from "../../../../services/admin/testService";

function Test() {
  const [isOpenDetail, setIsOpenDetail] = useState(0);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const [data, setData] = useState([]); // Replace null with actual data fetching logic
  const { tests, loading, error } = useFetchTests({
    accessToken: Cookies.get("access_token"),
    dependencies: [],
  });

  useEffect(() => {
    if (tests) {
      setData(tests);
    }
  }, [tests]);

  const [formData, setFormData] = useState({
    name: "",
    time: 0,
    description: "",
    image: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleCreateTest({
        image: formData.image,
        name: formData.name,
        time: formData.time,
        description: formData.description,
        accessToken: Cookies.get("access_token"),
        handleSucess: ({ dataTest, message }) => {
          alert(message);
          setData((prevData) => [
            ...prevData,
            [
              dataTest.id,
              dataTest.name,
              dataTest.time,
              dataTest.description,
              dataTest.image,
              dataTest.created_at,
              dataTest.updated_at,
            ],
          ]);

          setIsOpenDialog(false);
          setFormData({
            name: "",
            time: 0,
            description: "",
            image: "",
          });
        },
      });

      // Reset form sau khi submit thành công
    } catch (error) {
      console.error("❌ Lỗi khi tạo bài kiểm tra:", error);
      alert("Đã có lỗi xảy ra khi tạo bài kiểm tra");
    }
  };

  if (isOpenDetail !== 0) {
    return (
      <>
        <TestDetail id={isOpenDetail} />
        <FloatingButton
          handleClick={() => {
            if (isOpenDetail != 0) {
              setIsOpenDetail(0);
            }
          }}
          icon="bxr  bx-arrow-in-left-square-half"
          title="Quay lại"
        />
      </>
    );
  } else {
    return (
      <div className={styles.testContainer}>
        {data.map((item) => (
          <ItemTest
            key={item[0]}
            item={item}
            handleViewDetails={() => {
              setIsOpenDetail(item.id);
            }}
            handleDelete={async (id) => {
              console.log(id);
              await handleDeleteTest({
                id,
                accessToken: Cookies.get("access_token"),
                handleSuccess: ({ message }) => {
                  alert(message);
                  setData((prevData) =>
                    prevData.filter((item) => item[0] !== id)
                  );
                },
              });
            }}
          />
        ))}

        <FloatingButton
          handleClick={() => {
            setIsOpenDialog(true);
          }}
          title="Thêm bài kiểm tra mới"
        />
        <DialogCustome
          isOpen={isOpenDialog}
          onClose={() => setIsOpenDialog(false)}
          title="Thêm bài kiểm tra mới"
          handleSubmit={handleFormSubmit}
        >
          <CreateTest
            formData={formData}
            handleInputChange={handleFormChange}
          />
        </DialogCustome>
      </div>
    );
  }
}

export default Test;

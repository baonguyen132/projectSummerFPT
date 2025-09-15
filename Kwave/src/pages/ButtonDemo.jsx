import React from "react";
import Button from "../components/common/Button";
import Header from "../components/Header/Header";
import RoadMap from "../components/RoadMap/RoadMap";
import Lesson from "../components/Lesson/Lesson";
import Grammar from "../components/Grammar/Grammar";
import ExamType from "../components/ExamType/ExamType";
import ExamList from "../components/ExamList/ExamList";
import { Outlet } from "react-router-dom";

function ButtonDemo() {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button type="fullgreen" size="small">Đăng nhập</Button>
      <Button type="outlinegreen" size="medium">Đăng ký</Button>
      <Button type="yellow" size="large">Đăng ký</Button>
      <Button type="orange" size="large">Đăng ký</Button>
      <Button type="darkgreen" size="large">Đăng ký</Button>
      <Button type="grey" size="large">Đăng ký</Button>
      <Button type="white" size="large">Đăng ký</Button>
      <Button
        type="segmented"
        options={["Hiện tại", "Yêu thích"]}
        defaultValue="Hiện tại"
        onChange={(val) => console.log("Chọn:", val)}
        size="large"
      />

      <Button
        type="card"
        layout="vertical"
        icon="https://static.vecteezy.com/system/resources/previews/016/389/614/original/taking-notes-icon-design-free-vector.jpg"
      >
        Hồ sơ
      </Button>

      <Button
        type="card"
        layout="horizontal-off"
        icon="https://cdn-icons-png.flaticon.com/512/323/323319.png"
      >
        Giới thiệu
      </Button>
      <Button
        type="card"
        layout="horizontal-on"
        icon="https://cdn-icons-png.flaticon.com/512/323/323319.png"
      >
        Giới thiệu
      </Button>
      
      <Outlet/>
      <Header></Header>
      <RoadMap/>
      <Lesson/>
      <Grammar/>
      <ExamType/>
      <ExamList/>
    </div>
  );
}

export default ButtonDemo;

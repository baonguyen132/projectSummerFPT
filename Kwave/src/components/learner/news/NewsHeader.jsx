import React from "react";
import Header from "../../Header/Header";
import NewsFilterBar from "./NewsFilterBar";

const NewsHeader = () => {
  return (
    <>
      <Header />
      
      {/* News Filter Bar - giữ lại các chức năng chọn ngày, thể loại, hiện tại, yêu thích, nguồn và xem video */}
      <div style={{ paddingTop: '80px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '10px' }}>
        <NewsFilterBar />
      </div>
    </>
  );
};

export default NewsHeader;



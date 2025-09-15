import React, { useState } from "react";
import Button from "../common/Button";
import "../Grammar/Grammar.css";

const Grammar = () => {
  const [answers, setAnswers] = useState([null, null, null]);

  const handleAnswer = (index, isCorrect) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[index] = isCorrect ? "correct" : "wrong";
      return newAnswers;
    });
  };

  return (
    <div className="grammar">
      {/* Card 1 */}
      <div className="grammar-card">
        <div className="grammar-name">
          <h2>-습니다/ㅂ니다</h2>
          <h2>Ngữ pháp</h2>
        </div>

        <div className="define">
          <h3>Định nghĩa</h3>
          <ul>
            <li>
              Cấu trúc:
              <ul>
                <li>
                  <b>N</b>(이/가) + <b>이다</b> → <b style={{ color: "red" }}>N입니다</b>
                </li>
                <li>
                  <b>N</b>(이/가) + <b>아니다</b> →{" "}
                  <b style={{ color: "red" }}>N(이/가) 아닙니다</b>
                </li>
                <li>
                  <b>V/A (받침: O)</b> + <b style={{ color: "red" }}>습니다</b>
                </li>
                <li>
                  <b>V/A (받침: X)</b> + <b style={{ color: "red" }}>ㅂ니다</b>
                </li>
              </ul>
            </li>
            <li>
              Nghĩa: <b>là [danh từ]</b>
            </li>
            <li>Dùng trong câu trần thuật lịch sự, trang trọng.</li>
            <li>
              Hình thức kính ngữ của <b style={{ color: "red" }}>이다</b> là{" "}
              <b style={{ color: "red" }}>입니다</b>
            </li>
          </ul>
        </div>

        <div className="example">
          <h3>Ví dụ</h3>
          <ul>
            <li>저는 학생입니다. (Tôi là học sinh.)</li>
            <li>저는 학생이 아닙니다. (Tôi không phải là học sinh.)</li>
            <li>책을 읽습니다. (Tôi đọc sách.)</li>
            <li>학교에 갑니다. (Tôi đi học.)</li>
            <li>사과가 작습니다. (Quả táo nhỏ.)</li>
            <li>수박이 큽니다. (Quả dưa hấu to.)</li>
          </ul>
        </div>

        <div className="homework">
          <h3>Bài tập</h3>
          <p>Hãy chọn câu đúng:</p>
          <ul>
            <li>
              저는 의사입니다.{" "}
              {answers[0] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(0, true)}
                >
                  O
                </Button>
              ) : answers[0] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
            <li>
              저는 학생이다입니다.{" "}
              {answers[1] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(1, false)}
                >
                  O
                </Button>
              ) : answers[1] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
            <li>
              저는 책이입니다.{" "}
              {answers[2] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(2, false)}
                >
                  O
                </Button>
              ) : answers[2] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="grammar-card">
        <div className="grammar-name">
          <h2>-습니다/ㅂ니다</h2>
          <h2>Ngữ pháp</h2>
        </div>

        <div className="define">
          <h3>Định nghĩa</h3>
          <ul>
            <li>
              Cấu trúc:
              <ul>
                <li>
                  <b>N</b>(이/가) + <b>이다</b> → <b style={{ color: "red" }}>N입니다</b>
                </li>
                <li>
                  <b>N</b>(이/가) + <b>아니다</b> →{" "}
                  <b style={{ color: "red" }}>N(이/가) 아닙니다</b>
                </li>
                <li>
                  <b>V/A (받침: O)</b> + <b style={{ color: "red" }}>습니다</b>
                </li>
                <li>
                  <b>V/A (받침: X)</b> + <b style={{ color: "red" }}>ㅂ니다</b>
                </li>
              </ul>
            </li>
            <li>
              Nghĩa: <b>là [danh từ]</b>
            </li>
            <li>Dùng trong câu trần thuật lịch sự, trang trọng.</li>
            <li>
              Hình thức kính ngữ của <b style={{ color: "red" }}>이다</b> là{" "}
              <b style={{ color: "red" }}>입니다</b>
            </li>
          </ul>
        </div>

        <div className="example">
          <h3>Ví dụ</h3>
          <ul>
            <li>저는 학생입니다. (Tôi là học sinh.)</li>
            <li>저는 학생이 아닙니다. (Tôi không phải là học sinh.)</li>
            <li>책을 읽습니다. (Tôi đọc sách.)</li>
            <li>학교에 갑니다. (Tôi đi học.)</li>
            <li>사과가 작습니다. (Quả táo nhỏ.)</li>
            <li>수박이 큽니다. (Quả dưa hấu to.)</li>
          </ul>
        </div>

        <div className="homework">
          <h3>Bài tập</h3>
          <p>Hãy chọn câu đúng:</p>
          <ul>
            <li>
              저는 의사입니다.{" "}
              {answers[0] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(0, true)}
                >
                  O
                </Button>
              ) : answers[0] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
            <li>
              저는 학생이다입니다.{" "}
              {answers[1] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(1, false)}
                >
                  O
                </Button>
              ) : answers[1] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
            <li>
              저는 책이입니다.{" "}
              {answers[2] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(2, false)}
                >
                  O
                </Button>
              ) : answers[2] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="grammar-card">
        <div className="grammar-name">
          <h2>-습니다/ㅂ니다</h2>
          <h2>Ngữ pháp</h2>
        </div>

        <div className="define">
          <h3>Định nghĩa</h3>
          <ul>
            <li>
              Cấu trúc:
              <ul>
                <li>
                  <b>N</b>(이/가) + <b>이다</b> → <b style={{ color: "red" }}>N입니다</b>
                </li>
                <li>
                  <b>N</b>(이/가) + <b>아니다</b> →{" "}
                  <b style={{ color: "red" }}>N(이/가) 아닙니다</b>
                </li>
                <li>
                  <b>V/A (받침: O)</b> + <b style={{ color: "red" }}>습니다</b>
                </li>
                <li>
                  <b>V/A (받침: X)</b> + <b style={{ color: "red" }}>ㅂ니다</b>
                </li>
              </ul>
            </li>
            <li>
              Nghĩa: <b>là [danh từ]</b>
            </li>
            <li>Dùng trong câu trần thuật lịch sự, trang trọng.</li>
            <li>
              Hình thức kính ngữ của <b style={{ color: "red" }}>이다</b> là{" "}
              <b style={{ color: "red" }}>입니다</b>
            </li>
          </ul>
        </div>

        <div className="example">
          <h3>Ví dụ</h3>
          <ul>
            <li>저는 학생입니다. (Tôi là học sinh.)</li>
            <li>저는 학생이 아닙니다. (Tôi không phải là học sinh.)</li>
            <li>책을 읽습니다. (Tôi đọc sách.)</li>
            <li>학교에 갑니다. (Tôi đi học.)</li>
            <li>사과가 작습니다. (Quả táo nhỏ.)</li>
            <li>수박이 큽니다. (Quả dưa hấu to.)</li>
          </ul>
        </div>

        <div className="homework">
          <h3>Bài tập</h3>
          <p>Hãy chọn câu đúng:</p>
          <ul>
            <li>
              저는 의사입니다.{" "}
              {answers[0] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(0, true)}
                >
                  O
                </Button>
              ) : answers[0] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
            <li>
              저는 학생이다입니다.{" "}
              {answers[1] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(1, false)}
                >
                  O
                </Button>
              ) : answers[1] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
            <li>
              저는 책이입니다.{" "}
              {answers[2] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(2, false)}
                >
                  O
                </Button>
              ) : answers[2] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="grammar-card">
        <div className="grammar-name">
          <h2>-습니다/ㅂ니다</h2>
          <h2>Ngữ pháp</h2>
        </div>

        <div className="define">
          <h3>Định nghĩa</h3>
          <ul>
            <li>
              Cấu trúc:
              <ul>
                <li>
                  <b>N</b>(이/가) + <b>이다</b> → <b style={{ color: "red" }}>N입니다</b>
                </li>
                <li>
                  <b>N</b>(이/가) + <b>아니다</b> →{" "}
                  <b style={{ color: "red" }}>N(이/가) 아닙니다</b>
                </li>
                <li>
                  <b>V/A (받침: O)</b> + <b style={{ color: "red" }}>습니다</b>
                </li>
                <li>
                  <b>V/A (받침: X)</b> + <b style={{ color: "red" }}>ㅂ니다</b>
                </li>
              </ul>
            </li>
            <li>
              Nghĩa: <b>là [danh từ]</b>
            </li>
            <li>Dùng trong câu trần thuật lịch sự, trang trọng.</li>
            <li>
              Hình thức kính ngữ của <b style={{ color: "red" }}>이다</b> là{" "}
              <b style={{ color: "red" }}>입니다</b>
            </li>
          </ul>
        </div>

        <div className="example">
          <h3>Ví dụ</h3>
          <ul>
            <li>저는 학생입니다. (Tôi là học sinh.)</li>
            <li>저는 학생이 아닙니다. (Tôi không phải là học sinh.)</li>
            <li>책을 읽습니다. (Tôi đọc sách.)</li>
            <li>학교에 갑니다. (Tôi đi học.)</li>
            <li>사과가 작습니다. (Quả táo nhỏ.)</li>
            <li>수박이 큽니다. (Quả dưa hấu to.)</li>
          </ul>
        </div>

        <div className="homework">
          <h3>Bài tập</h3>
          <p>Hãy chọn câu đúng:</p>
          <ul>
            <li>
              저는 의사입니다.{" "}
              {answers[0] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(0, true)}
                >
                  O
                </Button>
              ) : answers[0] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
            <li>
              저는 학생이다입니다.{" "}
              {answers[1] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(1, false)}
                >
                  O
                </Button>
              ) : answers[1] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
            <li>
              저는 책이입니다.{" "}
              {answers[2] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(2, false)}
                >
                  O
                </Button>
              ) : answers[2] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="grammar-card">
        <div className="grammar-name">
          <h2>-습니다/ㅂ니다</h2>
          <h2>Ngữ pháp</h2>
        </div>

        <div className="define">
          <h3>Định nghĩa</h3>
          <ul>
            <li>
              Cấu trúc:
              <ul>
                <li>
                  <b>N</b>(이/가) + <b>이다</b> → <b style={{ color: "red" }}>N입니다</b>
                </li>
                <li>
                  <b>N</b>(이/가) + <b>아니다</b> →{" "}
                  <b style={{ color: "red" }}>N(이/가) 아닙니다</b>
                </li>
                <li>
                  <b>V/A (받침: O)</b> + <b style={{ color: "red" }}>습니다</b>
                </li>
                <li>
                  <b>V/A (받침: X)</b> + <b style={{ color: "red" }}>ㅂ니다</b>
                </li>
              </ul>
            </li>
            <li>
              Nghĩa: <b>là [danh từ]</b>
            </li>
            <li>Dùng trong câu trần thuật lịch sự, trang trọng.</li>
            <li>
              Hình thức kính ngữ của <b style={{ color: "red" }}>이다</b> là{" "}
              <b style={{ color: "red" }}>입니다</b>
            </li>
          </ul>
        </div>

        <div className="example">
          <h3>Ví dụ</h3>
          <ul>
            <li>저는 학생입니다. (Tôi là học sinh.)</li>
            <li>저는 학생이 아닙니다. (Tôi không phải là học sinh.)</li>
            <li>책을 읽습니다. (Tôi đọc sách.)</li>
            <li>학교에 갑니다. (Tôi đi học.)</li>
            <li>사과가 작습니다. (Quả táo nhỏ.)</li>
            <li>수박이 큽니다. (Quả dưa hấu to.)</li>
          </ul>
        </div>

        <div className="homework">
          <h3>Bài tập</h3>
          <p>Hãy chọn câu đúng:</p>
          <ul>
            <li>
              저는 의사입니다.{" "}
              {answers[0] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(0, true)}
                >
                  O
                </Button>
              ) : answers[0] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
            <li>
              저는 학생이다입니다.{" "}
              {answers[1] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(1, false)}
                >
                  O
                </Button>
              ) : answers[1] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
            <li>
              저는 책이입니다.{" "}
              {answers[2] === null ? (
                <Button
                  className="circle-btn"
                  type="outlinegreen"
                  onClick={() => handleAnswer(2, false)}
                >
                  O
                </Button>
              ) : answers[2] === "correct" ? (
                <span className="icon correct">
                  <i className="bx bx-check"></i>
                </span>
              ) : (
                <span className="icon wrong">
                  <i className="bx bx-x"></i>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Grammar;

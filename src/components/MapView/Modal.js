import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";

const Modal = ({ modal, formId, setModal }) => {
  const [fields, setFields] = useState([]);
  const BASE_URL = "https://prueba.smartseals.co/prueba-frontend";
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (formId === "") return;
    const getForm = async () => {
      await axios
        .get(`${BASE_URL}/api/forms`, {
          headers: {
            token: token,
          },
        })
        .then((res) => setFields(res.data[0].fields));
    };

    getForm();
  }, [formId, token]);

  return (
    <>
      {modal && (
        <div className="modal__from--overlay">
          <div className="modal__form--container">
            <div className="modal__form--content">
              <div
                onClick={() => setModal(false)}
                className="modal__button--exit"
              >
                <span>x</span>
              </div>
              <div className="modal__from">
                <p className="modal__form--title">Información</p>
                <form>
                  {fields.map((field, index) => {
                    return (
                      <>
                        {field.type === "text" && (
                          <>
                            <label className="modal__form--label">
                              {field.title}
                            </label>
                            <input
                              className="modal__form--input"
                              type={field.type}
                            />
                          </>
                        )}
                        {field.type === "checkbox" && (
                          <div>
                            <span className="modal__form--label">
                              {field.title}
                            </span>
                            {field.options.map((option) => (
                              <div className="modal__form--checkbox-container">
                                <input
                                  type="checkbox"
                                  value={option}
                                  id={option}
                                />
                                <label
                                  className="modal__form--checkbox-label"
                                  for={option}
                                >
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}

                        {field.type === "select" && (
                          <>
                            <label className="modal__form--label">
                              {field.title}
                            </label>
                            <select
                              className="modal__form--select"
                              name="select"
                            >
                              <option value="">Departamento</option>
                              {field.options.map((option) => (
                                <option value="option">{option}</option>
                              ))}
                            </select>
                          </>
                        )}
                        {console.log(field)}
                      </>
                    );
                  })}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

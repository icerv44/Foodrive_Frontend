import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import ButtonGreenGradiant from "../../../components/button/ButtonGreenGradiant";
import Spinner from "../../../components/ui/Spinner";
import { useError } from "../../../contexts/ErrorContext";
import { useSuccess } from "../../../contexts/SuccessContext";

function ModalForgetPassword() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [forgetPasswordToken, setForgetPasswordToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setError } = useError();
  const { setSuccess } = useSuccess();
  const navigate = useNavigate();

  const handleSendForgetPasswordToken = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("/auth/forget-password", {
        email,
      });
      setSuccess(res.data.message);
      setToken(res.data.token);
      setPage(2);
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckToken = () => {
    if (token === forgetPasswordToken) {
      setSuccess("Success! Please change your password");
      setPage(3);
    } else {
      setError("Your recovery code is not correct");
    }
  };

  const handleChangePassword = async () => {
    try {
      setIsLoading(true);
      const res = await axios.patch("/auth/change-password", {
        email,
        forgetPasswordToken,
        password,
        confirmPassword,
      });
      setSuccess(res.data.message);
      setIsOpen(false);
      navigate("/customer");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <div onClick={() => setIsOpen(true)}>Forgot Your Password?</div>
      {page === 1 ? (
        // ----------------------PAGE1----------------------
        <Modal
          style={{
            overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
            content: {
              borderRadius: "18px",
              boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
              height: "36vh",
              top: "30%",
            },
          }}
          id="root"
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <Box className="flex flex-col gap-3">
            <Box className="text-xl font-bold text-center">
              Forget Password?
            </Box>
            <Box>
              Please enter your email address to search for your account.
            </Box>
            {/* INPUT */}
            <Box>
              <Box className="text-[#3B3B3B] opacity-[0.3] m-1">Email*</Box>
              <Box
                sx={{
                  boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
                  mb: "16px",
                }}
              >
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  className="rounded-xl w-full py-2 px-3 border border-teal-200"
                />
              </Box>
            </Box>
            <Box className="-mt-[10px] mx-auto">
              <ButtonGreenGradiant
                px="35px"
                type="email"
                title="Submit"
                onClick={handleSendForgetPasswordToken}
              />
            </Box>
          </Box>
        </Modal>
      ) : page === 2 ? (
        // ----------------------PAGE 2----------------------
        <Modal
          style={{
            overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
            content: {
              borderRadius: "18px",
              boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
              height: "36vh",
              top: "30%",
            },
          }}
          id="root"
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <Box className="flex flex-col gap-3">
            <Box className="text-xl font-bold text-center">
              Forget Password?
            </Box>
            <Box>Please enter your recovery code from your email.</Box>
            <Box>
              <Box className="text-[#3B3B3B] opacity-[0.3] m-1">
                {/* INPUT */}
                Recovery code*
              </Box>
              <Box
                sx={{
                  boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
                  mb: "16px",
                }}
              >
                <input
                  value={forgetPasswordToken}
                  onChange={(e) => {
                    setForgetPasswordToken(e.target.value);
                  }}
                  type="text"
                  className="rounded-xl w-full py-2 px-3 border border-teal-200"
                />
              </Box>
            </Box>
            <Box className="-mt-[10px] mx-auto">
              <ButtonGreenGradiant
                px="35px"
                type="email"
                title="Submit"
                onClick={handleCheckToken}
              />
            </Box>
          </Box>
        </Modal>
      ) : (
        // ----------------------PAGE 3----------------------
        <Modal
          style={{
            overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
            content: {
              borderRadius: "18px",
              boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
              height: "39vh",
              top: "28%",
            },
          }}
          id="root"
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <Box className="flex flex-col gap-3">
            <Box className="text-xl font-bold text-center">Change Password</Box>
            {/* INPUT 1 */}
            <Box>
              <Box className="text-[#3B3B3B] opacity-[0.3] m-1">
                new password*
              </Box>
              <Box
                sx={{
                  boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
                  mb: "16px",
                }}
              >
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="rounded-xl w-full py-2 px-3 border border-teal-200"
                />
              </Box>
              {/* INPUT 2 */}
              <Box className="text-[#3B3B3B] opacity-[0.3] m-1">
                confirm password*
              </Box>
              <Box
                sx={{
                  boxShadow: "12px 26px 50px rgba(90, 108, 234, 0.07)",
                  mb: "16px",
                }}
              >
                <input
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  type="password"
                  className="rounded-xl w-full py-2 px-3 border border-teal-200"
                />
              </Box>
            </Box>
            <Box className="-mt-[11px] mx-auto">
              <ButtonGreenGradiant
                px="35px"
                title="Submit"
                onClick={handleChangePassword}
              />
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
}

export default ModalForgetPassword;

import React , {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/AuthForm.css";
import { toast } from "react-toastify";
const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      age: "",
      contact: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);
      try {
        const res = await axios.post(
          "http://localhost:3000/api/patients/register",
          formData
        );
        const data = res.data;

        // Save token to localStorage or context
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            id: data.id,
            name: data.name,
            email: data.email,
            token: data.token,
          })
        );
       toast.success("Registration successfull! ");
        // Redirect to patient dashboard or profile completion
        navigate("/");
      } catch (err) {
        toast.error("Something went wrong");
        //setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };


return (
    <div className="register-page">
      <h2>Patient Registration</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
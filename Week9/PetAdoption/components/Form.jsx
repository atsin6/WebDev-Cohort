import React, {useState} from "react";
import "./Form.css";
import { validate } from '../schemas/validationSchema.jsx'

const Form = ({addNewSubmissions}) => {

    const [formData, setFormData] = useState({
        adopterName: "",
        email: "",
        phone: "",
        petType: "",
        breed: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
        ...prev,
        [name]: value
        }));

        setErrors(prev => {
            if (!prev[name]) return prev;
            const updated = { ...prev };
            delete updated[name];
            return updated;
        });
    }

    

    function handleSubmit(e){
        e.preventDefault();

        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        addNewSubmissions(formData);

        setFormData({
            adopterName: "",
            email: "",
            phone: "",
            petType: "",
            breed: ""
        });
        setErrors({});
    }

    return <>
        <form className="adoption-form" onSubmit={handleSubmit}>
            <div className="form-heading">
                <p className="form-eyebrow">Adoption Request</p>
                <h2>Find your next companion</h2>
                <p>Share your details and pet preference to submit your request.</p>
            </div>

            <label className="field">
                Adopter Name: 
                <input type="text" name = "adopterName" placeholder="Adopter Name" value = {formData.adopterName} onChange={handleChange} />
                {errors.adopterName && <span>{errors.adopterName}</span>}
            </label>
            <label className="field">
                Email: 
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
            </label>
            <label className="field">
                Phone:
                <input type="text" name="phone"  placeholder="Phone" value={formData.phone} onChange={handleChange}/>
                {errors.phone && <span>{errors.phone}</span>}
            </label>
            <label className="field">
                Pet Type:
                <input type="text" name="petType" placeholder="Pet Type" value={formData.petType} onChange={handleChange}/>
                {errors.petType && <span>{errors.petType}</span>}
            </label>
            <label className="field">
                Breed:
                <input type="text" name="breed" placeholder="Breed" value={formData.breed} onChange={handleChange}/>
                {errors.breed && <span>{errors.breed}</span>}
            </label>

            <button className="submit-btn" type="submit">Submit</button>
        </form>
    </>
}

export default Form;

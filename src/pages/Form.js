import {useState} from "react";
import {useNavigate} from "react-router-dom"

const Form = ({initialDid, handleSubmit, buttonLabel}) => {

  const navigate = useNavigate()

  // The Form State
  const [formData, setFormData] = useState(initialDid)

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // HandleSubmit for when the form submited
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault()
    // pass the formData to the handleSubmit function passes as props
    handleSubmit(formData)
    //push user back to main page
    navigate("/")

  }

  return <form onSubmit={handleSubmission}>
    <input
      type="text"
      onChange={handleChange}
      value={formData.activity}
      name="activity"
      />
    <input
    type="text"
    onChange={handleChange}
    value={formData.time}
    name="time"
    />
    <input type="submit" value={buttonLabel} />
  </form>
};

export default Form;
export default function PersonalForm({ data, onChange }) {
  return (
    <div>
      <h2 className="section-heading">Personal details</h2>
      <p className="section-sub">Basic info jo resume ke top pe dikhega.</p>

      <div className="row2">
        <div className="form-group">
          <label>First name</label>
          <input
            value={data.fname}
            onChange={e => onChange('fname', e.target.value)}
            placeholder="Rahul"
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            value={data.lname}
            onChange={e => onChange('lname', e.target.value)}
            placeholder="Sharma"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Job title / Desired role</label>
        <input
          value={data.jobtitle}
          onChange={e => onChange('jobtitle', e.target.value)}
          placeholder="Software Engineer"
        />
      </div>

      <div className="row2">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={e => onChange('email', e.target.value)}
            placeholder="rahul@gmail.com"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            value={data.phone}
            onChange={e => onChange('phone', e.target.value)}
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="row2">
        <div className="form-group">
          <label>City</label>
          <input
            value={data.city}
            onChange={e => onChange('city', e.target.value)}
            placeholder="Noida, UP"
          />
        </div>
        <div className="form-group">
          <label>LinkedIn / Portfolio URL</label>
          <input
            value={data.linkedin}
            onChange={e => onChange('linkedin', e.target.value)}
            placeholder="linkedin.com/in/rahul"
          />
        </div>
      </div>
    </div>
  )
}

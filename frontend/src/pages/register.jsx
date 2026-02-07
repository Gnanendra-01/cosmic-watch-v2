export default function Register() {
  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <select>
        <option value="enthusiast">Enthusiast</option>
        <option value="researcher">Researcher</option>
      </select>
      <button>Register</button>
    </div>
  );
}
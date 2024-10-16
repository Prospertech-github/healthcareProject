
export default function FormComponent() {
  
  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="username"
          className="border-2 border-red-500"
          />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          className="border-2 border-red-500"
        />
      </div>
    </form>
  );
}

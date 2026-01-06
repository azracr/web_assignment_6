export default function FilterForm({ value, onChange }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: 16 }}>
      <label style={{ display: "block", marginBottom: 6 }}>
        Filter by title
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type something..."
        style={{ padding: 8, width: "100%", maxWidth: 420 }}
      />
    </form>
  );
}

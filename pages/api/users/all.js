export default function (req, res) {
  res.status(200).json({
    users: [{ name: "Jhon Doe" }, { name: "Jane Doe" }],
  });
}

export default function Footer() {
  let date = new Date().getFullYear();

  return (
    <div>
      <p>&copy; {date} Moogle. All Rights Reserved.</p>
    </div>
  );
}

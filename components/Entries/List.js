export default function Entry({ entries }) {
  console.log("List entries are", entries);

  return (
    <ul>
      Your thoughts so far:
      {entries
        ? entries.text.map((entry) => (
            <li key={entry.date}>
              {entry.date} {""}
              {entry.text}
            </li>
          ))
        : null}
    </ul>
  );
}

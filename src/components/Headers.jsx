function Headers({ headers }) {
  return (
    <div className="flex flex-col gap-2">
      {headers.map((header, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="font-bold">{header.name}:</span>
          <span>{header.value}</span>
        </div>
      ))}
    </div>
  );
}


export default Headers;
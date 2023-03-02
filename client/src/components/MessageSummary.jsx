

const MessageSummary = ({ subject, time, excerpt }) => {
  return (
    <div className="border-b border-[#D3D6DB] p-2 lg:p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="inline-block">{subject}</span>
        <span className="inline-block">{time}</span>
      </div>
      <span className="inline-block mb-2">{excerpt}</span>
    </div>
  )
}

export default MessageSummary;

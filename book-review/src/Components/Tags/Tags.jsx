import PropTypes from 'prop-types';

export default function Tags({tag}) {
    console.log(tag)
  return (
    <div>

      <h1 className="border p-2 bg-[#23BE0A0D] text-[#23BE0A] rounded-xl">#{tag}</h1>
      
    </div>
  )
}

Tags.propTypes = {
  tag: PropTypes.string.isRequired,
}
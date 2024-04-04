const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
                <span className='label-text text-gray-200'>Male</span>
                <input type='checkbox' checked={selectedGender === "male"} onChange={() => onCheckboxChange("male")}
                className='checkbox border-gray-400 checkbox-warning' />
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""} `}>
                <span className='label-text text-gray-200'>Female</span>
                <input type='checkbox' checked={selectedGender === "female"} onChange={() => onCheckboxChange("female")}
                className='checkbox border-gray-400 checkbox-warning' />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox
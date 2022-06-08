import '../assets/sass/entity_details.scss';
import '../assets/sass/authorization.scss';
import EditIcon from '../assets/img/EditIcon.svg';

export const EntityDetailsForm = ({ entityType, data, onEditClick }) => {
  return (
    <div className="entity-details-wrapper">
      <div className="authorization-form-wrapper">
        <div className="entity-details-header-wrapper">
          <p>{`${entityType} Details`}</p>
          <img src={EditIcon} alt="Edit" onClick={onEditClick} />
        </div>
        {data.map((element, index) =>
          Array.isArray(element.value) ? (
            <div
              key={index}
              className="entity-details-data-field-with-multiple-values-wrapper"
            >
              <p>Invited users:</p>
              {element.value.map((value, index) => (
                <p key={index}>{value}</p>
              ))}
            </div>
          ) : (
            <div key={index} className="entity-details-data-field-wrapper">
              <p>{element.title}</p>
              <p>{element.value}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

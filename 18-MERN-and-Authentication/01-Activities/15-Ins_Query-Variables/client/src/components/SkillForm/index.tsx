import { type FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_SKILL } from '../../utils/mutations';

const SkillForm = ({ profileId }: any) => {
  const [skill, setSkill] = useState('');

  const [addSkill, { error }] = useMutation(ADD_SKILL);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await addSkill({
        variables: { profileId, skill },
      });

      setSkill('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Endorse some more skills below.</h4>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Endorse some skills..."
            value={skill}
            className="form-input w-100"
            onChange={(event) => setSkill(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Endorse Skill
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default SkillForm;

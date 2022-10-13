import React from 'react'

export const Experience = ({ ex }) => {
  console.log(ex)
  return (
    <section>
      <h2>Expériences professionnelles</h2>

      {ex.map((exp , i) =>
        <div className="exp" key={i}>
          <div className="exp-logo">
            <a href="/#"><img src={exp.societe && exp.societe.logo} alt="Logo de Pierre Giraud" /></a>
          </div>
          <div className="exp-info">
            <h3>{exp.titre}</h3>
            <h4>{exp.societe && exp.societe.nom? exp.societe.nom : 'pas de société'}</h4>
            <h4>{exp.societe && exp.societe.nom }</h4>

            <h4>{exp.date_debut} - {exp.date_fin}</h4>
          </div>
          <div className="exp-desc">
            <p>{exp.description}</p>
          </div>
        </div>

      )}


    </section>
  )
}

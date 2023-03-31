import React from 'react'

export default function TodoListe(){
  return (
    <div>
<div className="col-md-6">
                    <div className="card mt-5 shadow-sm">
                        <div className="card-header">
                            <h6>Liste des tâches</h6>
                        </div>
                        <div className="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Tache</span>
                                    <div>
                                        <button className="btn btn-success btn-sm me-4">Terminer</button>
                                        <button className="btn btn-danger btn-sm">Supprimer</button>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Tache</span>
                                    <div>
                                        <button className="btn btn-success btn-sm me-4">Terminer</button>
                                        <button className="btn btn-danger btn-sm">Supprimer</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>    </div>
  )
}

import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import { firebase } from '../firebase';

export const IndividualProject = ({project}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const { projects, setProjects } = useProjectsValue();
    const { setSelectedProject } = useSelectedProjectValue();

    const deleteProject = docId => {
        firebase
            .firestore()
            .collection('projects')
            .doc(docId)
            .delete()
            .then(() => {
                setProjects([...projects]);
                setSelectedProject('INBOX');
            });
    };

    return (
        <>
            <span className='sidebar__dot'>•</span>
            <span className='sidebar__project-name'>{project.name}</span>




            <div className={showConfirm ? 'delete-project delete-project__overlay' : 'delete-project'}>
                <FaTrashAlt
                    className='sidebar__project-delete'
                    onClick={() => setShowConfirm(!showConfirm)}
                    onKeyDown={() => setShowConfirm(!showConfirm)}
                    tabIndex={0}
                    role='button'
                 />

                 {showConfirm && (
                    <div className='delete-project__main' data-testid='delete-project-main'>
                        <>
                            <div data-testid='quick-add-task'>
                                <p className='delete-header'>Are you sure you want to delete this project?</p>
                            </div>
                            <div>
                                <button type='button' onClick={() => deleteProject(project.docId)}>
                                    Delete
                                </button>
                                <span 
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    onKeyDown={() => setShowConfirm(!showConfirm)}
                                    tabIndex={0}
                                    role='button'
                                    aria-label='Cancel adding project, do not delete'
                                >
                                    Cancel
                                </span>                                
                            </div>
                        </>
                    </div>
                 )}
            </div>


            {/* <span 
                className='sidebar__project-delete' 
                data-testid='delete-project' 
                onClick={() => setShowConfirm(!showConfirm)}
                onKeyDown={() => setShowConfirm(!showConfirm)}
                tabIndex={0}
                role='button'
                aria-label='Confirm deletion of project'
            >
                <FaTrashAlt />
                {showConfirm && (
                    <div className='project-delete-modal'>
                        <div className='project-delete-modal__inner'>
                            <p>Are you sure you want to delete this project?</p>
                            <button
                                type='button'
                                onClick={() => deleteProject(project.docId)}
                            >
                                Delete
                            </button>
                            <span 
                                onClick={() => setShowConfirm(!showConfirm)}
                                onKeyDown={() => setShowConfirm(!showConfirm)}
                                tabIndex={0}
                                role='button'
                                aria-label='Cancel adding project, do not delete'
                            >
                                Cancel
                            </span>
                        </div>
                    </div>
                )}
            </span> */}
        </>
    );
};
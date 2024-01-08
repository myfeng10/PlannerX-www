
import Container from '../components/Container';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const PlanDetail =({plan})=>{
    return(
        <tr>
            <td>{plan.planname}</td>
            <td>{plan.semester}</td>
            <td>{plan.id}</td>
        </tr>
    );
};
const Dashboard = ()=>{
    const [plans, setPlans] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/users/getPlan')
            .then(response => response.json())
            .then(data => setPlans(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const editPlan = (planId) => {
        return () => {
            navigate(`/plan/${planId}`);
        };
    };

    const addPlan = () => {
        navigate('/addPlan');
    };
    

    return(
        <>
            <div className="bg-bg-primary text-text-primary min-w-screen w-screen flex flex-col justify-center pt-14 px-80 pb-36">
                <div className="text-4xl font-extrabold pb-10 self-center"></div>
                    <div className="flex flex-col justify-center ">
                        <div className="flex flex-row justify-between pb-5">
                            <div className="text-accent-5 text-2xl">My plans</div>
                            <div className=""> 
                                <Button label={"+ Add Plan"} size='sm' variant='Action_' onClick={addPlan}/>
                            </div>
                        </div>
                        <div>
                            <Container color={"border-accent-5"} >
                                 <table class="w-full border-collapse table-auto">
                                    <thead>
                                        <tr>
                                            <th class="py-2 px-4  text-text-secondary font-extrabold text-xl">Plan Name</th>
                                            <th class="py-2 px-4  text-text-secondary font-extrabold text-xl">Semester</th>
                                            <th class="py-2 px-4  text-text-secondary font-extrabold text-xl">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {plans.map(plan => (
                                            <tr key={plan.id} class="border-b align-middle">
                                                <td class="py-2 px-4 text-center">{plan.planname}</td>
                                                <td class="py-2 px-4 text-center">{plan.semester}</td>
                                                <td class="py-2 px-4 text-center">
                                                <Button label="View & Edit" size="sm" variant="Action_" onClick={editPlan(plan.id)} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Container>

                        </div>
                    </div>  
             
                
               
            </div> 
        </>
    );

};

export default Dashboard;
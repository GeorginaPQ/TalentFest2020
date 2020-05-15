import React, { useState, useEffect, useContext }from 'react';
import * as HomeComponent from './StyleHomeComponent';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { blueGrey } from '@material-ui/core/colors';
import Loader from 'react-loader';
// import { auth } from '';

/* [Sprint 1] VistaHome. 
const { staffID } = useContext(auth); 
const [taskList, setTaskList] = useState([]); 

useEffect(() => {}, [staffID]); => 
Llamada a API para obtener todos los proyectos en los que participa nuestro usuario. 
Esta informacion se guarda en projectList. Despues realiza una llamada a API para sacar
las tareas asignadas al usuario en el projectList[0] y las almacena en taskList. 
Usando el context de Auth almacena el nombre de usuario en staffName.

 [Sprint 2] const [projectList, setProjectList] = useState([]);  

 [Sprint 3] const [view, setView] = useState(‘viewTask’); 
 // viewTask || viewGraph 

 const [taskInProgress, setTaskInProgress] = useState(false);
 const staffName; 
 const tempoHandler = (type) ={ //Push time data to API }; 
 const taskStatusHandler = (newStatus) => {// Actualizar el estado de la tarea en API, 
 activar un reacarga de data, setTaskList } */
const projectListMock = [
	{ 
		id:1,
		name: 'Proyecto #1',
		tasks: {
			name:'Task project 1'
		}
	},
	{
		id:2,
		name: 'Proyecto #2',
		tasks: {
			name:'Task project 2'
		}
	},
	{	
		id:3,
		name: 'Proyecto #3',
		tasks: {
			name:'Task project 2'
		}
	},
	{
		id:4,
		name: 'Proyecto #4',
		tasks: {
			name:'Task project 2'
		}
	}
]



const Home = () => {
	const classes = useStyles();
	const [projectList, setProjectList] = useState(projectListMock);  
	const [taskList, setTaskList] = useState([]); 
	const [loaded, setLoaded] = useState(false);

	/* 	
	const { staffID } = useContext(auth);

	useEffect(() => {
		// obtengo un objeto de la base de datos (API)
		if (staffID) {
			const unsubscribe = (() => {
				settaskList();
				setLoaded(true)
			});
			return unsubscribe; 
		} else {
			return <Redirect to='/' />;
		}       
	}, [staffID]); */


	return(
		<div>
			<HomeComponent.ScreenContainer>
				<HomeComponent.HomeContainer>
					<HomeComponent.Header> 
						<h1>Bienvenido, #usuario!</h1>
					</HomeComponent.Header>
					<HomeComponent.DivisionBar>
						<FormControl className={classes.formControl}>
							<InputLabel  style={{ color: blueGrey[900] }}  id="demo-simple-select-label">Proyectos</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
							>									
								{projectList.map(project => (
									<MenuItem
										as="button"
										key={project.name}
										value={project.id}>
										{project.name}
									</MenuItem>
								))}		 
							</Select>
						</FormControl>
					</HomeComponent.DivisionBar>
					<div>
						<Loader 
							loaded={loaded}
							lines={20}
							color="#4997B4"
							radius={30}
							length={20}
						/>	
					</div>
					<div>
						<button onClick={() => setLoaded(true)}>Stop Loader</button>	
					</div>										
				</HomeComponent.HomeContainer>		
			</HomeComponent.ScreenContainer>
		</div>
	)

};
const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 170,
		backgroundColor:' #ffff',
	},
}));

export default Home;

import { useState } from 'react';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Footer from './components/Footer';
import './App.css';

const App = ({taskList}) => {
  const [tasks, setTasks] = useState(taskList);

  const addTask = (task) => {
    if (task.length < 1) {
      alert("No task given")
      return
    }
    const newTask = { id: "todo-" + nanoid(), task: task, done: false};
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const toggleTaskDone = (id) => {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, done: !task.done};
      }
      return task;
    })
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }

  const tasksList = tasks.map(task => (
    <Todo 
      task={task.task}
      id={task.id}
      done={task.done}
      toggleTaskDone={toggleTaskDone}
      deleteTask={deleteTask}
      key={task.id}
    />
    )
  );

  const tasksExist = (
    <ul className="todos__todo-list">
      {tasksList}
    </ul>
  );

  const noTasksExist = (
    <div className="svg-container">
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="471.64422" height="535.27925" viewBox="0 0 471.64422 535.27925">
        <path d="M667.40014,578.66468a5.85335,5.85335,0,0,0,8.19478-7.3327c.11916-.59306.20482-1.01884.32411-1.612a15.72575,15.72575,0,0,1,26.43575,12.29672c-.72482,17.64262.14665,36.67992-11.57959,50.90291,53.51961-43.734,77.92233-118.2368,61.57827-185.24539-8.0198-11.17512-11.761-26.02083-8.16445-39.47385,4.51311,4.38941,13.31085,3.21024,11.96647-4.38842-.72128-3.00309-1.46768-5.99712-2.18874-9.00021,30.82539-12.02859,38.87346,33.80585,2.35924,52.46738a187.6699,187.6699,0,0,1,4.84037,38.83077,78.90732,78.90732,0,0,1,20.02313-31.05739c8.75094-7.879,20.3222-12.51213,31.08707-17.79832,13.09908-6.44942,27.63689,6.33656,22.47934,19.98615-8.71986-1.11568-14.89006,9.307-6.97706,14.908-13.89815,23.34128-40.54715,38.177-67.62313,38.41262a188.40108,188.40108,0,0,1-24.59141,75.51612c17.29669-26.30123,50.77-18.72874,77.22357-19.84935a9.114,9.114,0,0,1,8.57482,14.314,52.64173,52.64173,0,0,0-10.42374.42381,7.95606,7.95606,0,0,0-2.913,14.70091c-23.20566,21.27359-59.16381,25.84652-87.38529,12.27172a193.68826,193.68826,0,0,1-28.089,28.68876l-41.957-20c.07173-.5379.16587-1.08375.25269-1.61446a52.80887,52.80887,0,0,0,11.9394,4.84236c-4.476-17.06309-9.46371-27.05742,4.61184-41.19017Z" transform="translate(-364.17789 -182.36037)" fill="#f2f2f2"/>
        <path d="M593.26174,538.30051a5.85334,5.85334,0,0,1-10.35535-3.69993c-.33407-.5043-.574-.86633-.90821-1.37062a15.72574,15.72574,0,0,0-19.84459,21.36c7.32613,16.066,13.7,34.0257,29.92495,42.77488C526.01581,577.04927,475.313,517.2547,465.17387,449.031c3.21209-13.3747,1.077-28.535-7.32832-39.63759-2.524,5.76753-11.11668,7.994-12.73784.44954-.46478-3.05332-.90287-6.10773-1.36785-9.161-33.08556.4874-23.25022,45.97183,17.6059,49.48155A187.67015,187.67015,0,0,0,471.51,487.95168a78.90719,78.90719,0,0,0-30.259-21.21042c-11.0765-3.99611-23.54062-3.92226-35.50427-4.75741-14.5642-1.032-23.20519,16.2932-13.28,26.98906,7.65489-4.32243,17.30079,3.00295,12.085,11.175,21.6759,16.37465,51.95244,20.06239,77.1172,10.06743a188.40088,188.40088,0,0,0,51.25978,60.66182c-25.93989-17.834-54.08421,1.80537-79.00634,10.74591a9.114,9.114,0,0,0-2.54213,16.491,52.6414,52.6414,0,0,1,9.81361-3.53937,7.95606,7.95606,0,0,1,8.243,12.51617c29.51594,10.94887,64.5428,1.62047,85.55912-21.5968a193.68792,193.68792,0,0,0,36.83557,15.97427l31.3136-34.3489c-.26933-.47111-.56241-.94112-.843-1.39989a52.80852,52.80852,0,0,1-9.23088,8.98824c-2.29093-17.491-1.44152-28.62844-19.80824-36.40786Z" transform="translate(-364.17789 -182.36037)" fill="#f2f2f2"/>
        <path d="M601.32052,393.15792a5.85335,5.85335,0,0,0,2.71449-10.65619c-.23174-.55876-.398-.96-.62969-1.51886a15.72575,15.72575,0,0,1,28.8015-4.53124c9.235,15.05,20.57265,30.36781,18.76825,48.7129,20.045-66.14534-1.23637-141.59909-52.165-188.11314-12.88827-4.8055-24.27123-15.04367-28.78634-28.21684,6.19385,1.12755,12.83978-4.75652,7.48711-10.31494-2.27313-2.09084-4.56208-4.16015-6.835-6.25112,18.88293-27.17217,51.119,6.38975,31.21174,42.24a187.67015,187.67015,0,0,1,25.66833,29.53634,78.90727,78.90727,0,0,1-.694-36.946c2.87158-11.4198,9.89418-21.71751,15.88324-32.10776,7.27823-12.65735,26.47552-10.14873,29.80436,4.058-7.86078,3.93559-7.17173,16.02814,2.52,16.26583,1.4765,27.12552-12.3743,54.29948-34.71987,69.59129a188.40091,188.40091,0,0,1,21.68969,76.40013c-.30555-31.47756,31.70416-43.8544,53.03958-59.53386a9.114,9.114,0,0,1,15.09909,7.10174,52.64111,52.64111,0,0,0-8.4169,6.16359,7.95606,7.95606,0,0,0,5.7783,13.828c-7.4029,30.59846-34.70366,54.44313-65.70016,58.909a193.68831,193.68831,0,0,1-7.32243,39.47682L608.53548,434.042c-.24036-.48654-.46655-.99215-.69037-1.48112a52.80911,52.80911,0,0,0,12.61126-2.637c-13.22923-11.66923-22.94211-17.185-19.13712-36.76506Z" transform="translate(-364.17789 -182.36037)" fill="#f2f2f2"/>
        <path d="M647.5666,378.41453c-20.9336,0-32.28809-2.55811-36.25342-8.01856-3.499-4.81787-1.15332-11.1748,1.563-18.53515,1.95215-5.29053,4.16455-11.28662,4.16455-17.22119,0-28.86426,14.63574-43.5,43.5-43.5,14.36133,0,29.78125,7.6289,41.24853,20.40771,10.42481,11.61719,15.61817,25.521,14.24854,38.146h0c-1.12354,10.354-5.94287,17.16308-15.167,21.42968l-.53955.24952-.15332-.57422a24.5432,24.5432,0,0,0-3.97412-8.24072,28.19811,28.19811,0,0,1-2.875,11.17334l-.09815.19873-.21289.061c-10.43994,2.97363-22.83008,3.7793-32.458,4.14844Q653.53072,378.41307,647.5666,378.41453Z" transform="translate(-364.17789 -182.36037)" fill="#2f2e41"/>
        <path d="M653.27212,418.63117a15.66635,15.66635,0,0,0-24.39185-7.36522l-68.8566,41.16735-21.54632-52.573a15.29692,15.29692,0,1,0-16.90148,6.07538c1.328,15.16031,8.70834,82.92118,34.38327,80.458,21.581-2.07043,75.17541-37.7632,91.82187-50.13882A15.668,15.668,0,0,0,653.27212,418.63117Z" transform="translate(-364.17789 -182.36037)" fill="#ffb6b6"/>
        <path d="M705.16071,717.63963h-59.93l-10.05-49.69-3.26,49.69h-55.67a1135.63224,1135.63224,0,0,1,6.09-116.83l.69-2.35,1.09-3.76.69-2.36,11.52-39.56.91-3.14h69.37a101.54508,101.54508,0,0,1,11.01,12.16c1.13,1.44,2.31,3,3.52,4.68.84,1.19,1.71,2.44,2.58,3.75a125.997,125.997,0,0,1,17.1,37.6v.01q.915,3.435,1.62,7.03v.01c.42,2.13.79,4.29,1.08,6.5.22,1.61.41,3.24.55,4.89a112.10334,112.10334,0,0,1-.87006,27.42Z" transform="translate(-364.17789 -182.36037)" fill="#2f2e41"/>
        <ellipse cx="385.51399" cy="258.37869" rx="7.55666" ry="5.25681" transform="translate(-431.45533 -25.76823) rotate(-21.16137)" fill="#e6e6e6"/>
        <ellipse cx="434.5175" cy="252.09254" rx="7.55666" ry="5.2568" transform="translate(-425.88162 -8.50206) rotate(-21.16137)" fill="#3f3d56"/>
        <ellipse cx="381.26407" cy="300.18686" rx="7.55666" ry="5.25681" transform="translate(-446.83449 -24.4832) rotate(-21.16137)" fill="#ff6584"/>
        <ellipse cx="367.88539" cy="318.88355" rx="3.3223" ry="4.77581" transform="translate(-427.73431 -89.0524) rotate(-13.31636)" fill="#e6e6e6"/>
        <ellipse cx="367.5938" cy="350.10614" rx="3.3223" ry="4.77581" transform="translate(-434.93358 -88.28009) rotate(-13.31636)" fill="#3f3d56"/>
        <ellipse cx="410.60279" cy="285.4369" rx="3.3223" ry="4.77581" transform="translate(-418.88208 -80.11268) rotate(-13.31636)" fill="#e6e6e6"/>
        <ellipse cx="384.79392" cy="279.16956" rx="3.3223" ry="4.77581" transform="translate(-418.13246 -86.22569) rotate(-13.31636)" fill="#ff6584"/>
        <ellipse cx="412.14945" cy="250.4188" rx="3.3223" ry="4.77581" transform="translate(-410.77486 -80.69797) rotate(-13.31636)" fill="#3f3d56"/>
        <ellipse cx="420.21763" cy="466.26555" rx="5.25681" ry="7.55666" transform="translate(-571.39218 301.67047) rotate(-49.59538)" fill="#e6e6e6"/>
        <ellipse cx="391.35696" cy="426.16665" rx="5.2568" ry="7.55666" transform="translate(-551.01114 265.58593) rotate(-49.59538)" fill="#3f3d56"/>
        <ellipse cx="459.0059" cy="450.09598" rx="5.25681" ry="7.55666" transform="translate(-545.43283 325.51844) rotate(-49.59538)" fill="#ff6584"/>
        <ellipse cx="481.81734" cy="452.95837" rx="4.77581" ry="3.3223" transform="translate(-543.44071 253.50273) rotate(-41.75038)" fill="#e6e6e6"/>
        <ellipse cx="509.41227" cy="438.34826" rx="4.77581" ry="3.3223" transform="translate(-526.70439 268.16763) rotate(-41.75038)" fill="#3f3d56"/>
        <ellipse cx="432.06576" cy="431.31964" rx="4.77581" ry="3.3223" transform="translate(-541.66604 214.87873) rotate(-41.75038)" fill="#e6e6e6"/>
        <ellipse cx="438.84328" cy="456.99926" rx="4.77581" ry="3.3223" transform="translate(-557.04462 225.91305) rotate(-41.75038)" fill="#ff6584"/>
        <ellipse cx="400.5356" cy="446.63329" rx="4.77581" ry="3.3223" transform="translate(-559.87018 197.77208) rotate(-41.75038)" fill="#3f3d56"/>
        <ellipse cx="616.52346" cy="207.20233" rx="5.25681" ry="7.55666" transform="translate(-392.33437 110.99155) rotate(-26.18799)" fill="#e6e6e6"/>
        <ellipse cx="627.07905" cy="255.46659" rx="5.2568" ry="7.55666" transform="translate(-412.55073 120.60421) rotate(-26.18799)" fill="#3f3d56"/>
        <ellipse cx="574.50371" cy="206.63192" rx="5.25681" ry="7.55666" transform="translate(-396.39593 92.38894) rotate(-26.18799)" fill="#ff6584"/>
        <ellipse cx="554.7067" cy="194.94288" rx="4.77581" ry="3.3223" transform="translate(-397.34247 2.11352) rotate(-18.34298)" fill="#e6e6e6"/>
        <ellipse cx="523.57864" cy="197.38809" rx="4.77581" ry="3.3223" transform="translate(-399.69362 -7.55838) rotate(-18.34298)" fill="#3f3d56"/>
        <ellipse cx="591.76756" cy="234.56544" rx="4.77581" ry="3.3223" transform="translate(-407.9288 15.78998) rotate(-18.34298)" fill="#e6e6e6"/>
        <ellipse cx="595.74946" cy="208.30669" rx="4.77581" ry="3.3223" transform="translate(-399.46273 15.70889) rotate(-18.34298)" fill="#ff6584"/>
        <ellipse cx="626.7865" cy="233.03792" rx="4.77581" ry="3.3223" transform="translate(-405.66876 26.73299) rotate(-18.34298)" fill="#3f3d56"/>
        <path d="M637.44226,386.45014l33.016-1.70078,15.335,24.23122s28.85327,4.82389,26.85327,38.82389-35.10581,63.83516-35.10581,63.83516l1.41517,17.7057-2.4578,7.02278.31518,3.94331,3.3529,4.17612.3452,4.31886-2.97065,6.83323,4.03976,6.5428-84.93395-8.22878-3.10581-11.314,4.53071-6.07552-2.53071-7.92448,3.80459-7.62205,1.98386-24.21106s-21.70416-32.60744,3.21155-57.16689l10-17,11.18914-13.65128Z" transform="translate(-364.17789 -182.36037)" fill="#ff8000"/>
        <circle cx="289.67779" cy="162.26351" r="34.98425" fill="#ffb6b6"/>
        <path d="M649.17158,342.5034q-4.522,0-9.03906-.25489l-.53809-.03027.0708-.53418a24.50407,24.50407,0,0,0-.7334-9.97266,28.2031,28.2031,0,0,1-6.873,9.707l-.167.15283-.22461-.02442A172.65893,172.65893,0,0,1,607.4167,337.124l-.30518-.07812-.061-.3086a45.78284,45.78284,0,0,1-.91993-8.87793c0-9.31591,3.37744-17.15674,9.51075-22.07812,6.67529-5.35694,16.24462-7.0044,26.9541-4.6416h34.24511a14.21619,14.21619,0,0,1,14.2002,14.20019v21.686l-.37354.09765A163.81194,163.81194,0,0,1,649.17158,342.5034Z" transform="translate(-364.17789 -182.36037)" fill="#2f2e41"/>
        <path d="M410.45832,303.58938a6.16369,6.16369,0,0,0-3.6763,7.89285l36.94327,101.36884a6.1637,6.1637,0,0,0,7.89272,3.67659l143.38306-52.25511a6.16369,6.16369,0,0,0,3.6763-7.89285L561.7341,255.01086a6.1637,6.1637,0,0,0-7.89272-3.67659Z" transform="translate(-364.17789 -182.36037)" fill="#ccc"/>
        <path d="M541.63689,378.13237l-87.76521,31.98551a6.63382,6.63382,0,0,1-8.4948-3.957l-33.50723-91.94065a6.63382,6.63382,0,0,1,3.95675-8.49494L551.10723,256.423a6.634,6.634,0,0,1,8.495,3.957l16.19036,44.42481A57.2643,57.2643,0,0,1,541.63689,378.13237Z" transform="translate(-364.17789 -182.36037)" fill="#fff"/>
        <path d="M478.48515,311.71291l-20.856,7.60085a2.1198,2.1198,0,1,1-1.45169-3.98332l20.856-7.60085a2.1198,2.1198,0,0,1,1.4517,3.98332Z" transform="translate(-364.17789 -182.36037)" fill="#ff8000"/>
        <path d="M528.20617,302.82027l-67.60829,24.63945a2.11981,2.11981,0,1,1-1.4517-3.98333l67.6083-24.63944a2.1198,2.1198,0,0,1,1.45169,3.98332Z" transform="translate(-364.17789 -182.36037)" fill="#ff8000"/>
        <path d="M531.61389,312.17073,464.0056,336.81017a2.1198,2.1198,0,1,1-1.4517-3.98332l67.60829-24.63945a2.11981,2.11981,0,0,1,1.4517,3.98333Z" transform="translate(-364.17789 -182.36037)" fill="#ff8000"/><path d="M535.02161,321.52118l-67.60829,24.63945a2.11981,2.11981,0,1,1-1.4517-3.98333l67.60829-24.63944a2.1198,2.1198,0,0,1,1.4517,3.98332Z" transform="translate(-364.17789 -182.36037)" fill="#ff8000"/>
        <path d="M538.42933,330.87164,470.821,355.51108a2.1198,2.1198,0,1,1-1.4517-3.98332l67.60829-24.63944a2.1198,2.1198,0,0,1,1.4517,3.98332Z" transform="translate(-364.17789 -182.36037)" fill="#ff8000"/><path d="M752.95063,356.83987l-37.01617,88.58a15.49581,15.49581,0,0,1-20.07063,8.35608l0,0a15.49584,15.49584,0,0,1-8.25517-20.918l41.27157-90.83415,22.75148-56.25137a13.52234,13.52234,0,1,1,17.28849,1.51415Z" transform="translate(-364.17789 -182.36037)" fill="#ffb6b6"/>
      </svg>
    </div>
  );

  return (
    <div className="app">
      <Header />
      <Form addTask={addTask}/>
      <div className="filters">
        <div className="filters__text">
          <p>Show:</p>
        </div>
        <div className="btn-group filters__btns">
          <FilterButton text="All" />
          <FilterButton text="Active" />
          <FilterButton text="Done" />
        </div>
      </div>
      <Counter tasks={tasks} />
      <div className="todos">
        {tasks.length >= 1 ? tasksExist : noTasksExist}
      </div>
      <Footer />
    </div>
  );
}

export default App;

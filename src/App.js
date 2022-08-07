import React from "react";
import {
	Add,
	Card,
	Cards,
	EntryBox,
	GlobalStyle,
	Main,
	MainContainer,
} from "./styles.js";
import remove from "./assets/remove.png";
import edit from "./assets/edit.png";

export default class App extends React.Component {
	state = {
		task: "",
		tasklist: [
			{
				taskName: "study react hooks",
				id: 1,
			},
			{
				taskName: "organize my gh repos",
				id: 2,
			},
			{
				taskName: "start a ux/ui course",
				id: 3,
			},
			{
				taskName: "improve my english",
				id: 4,
			},
		],
	};
	handleTask = (e) => {
		this.setState({
			task: e.target.value,
		});
	};
	addTask = () => {
		return this.state.task.length > 0
			? this.setState({
					task: "",
					tasklist: this.state.tasklist.concat({
						taskName: this.state.task,
						id: Date.now(),
					}),
			  })
			: null;
	};
	enterAdd = (e) => {
		return this.state.task.length > 0 && e.key === "Enter"
			? this.setState({
					task: "",
					tasklist: this.state.tasklist.concat({
						taskName: this.state.task,
						id: Date.now(),
					}),
			  })
			: null;
	};
	remove = (id) => {
		this.setState({
			tasklist: this.state.tasklist.filter((i) => i.id !== id),
		});
	};
	edit = (id, taskName) => {
		this.setState({
			task: taskName,
			tasklist: this.state.tasklist.filter((i) => i.id !== id),
		});
	};

	render() {
		return (
			<>
				<GlobalStyle />
				<Main>
					<MainContainer>
						<h1>Keep yourself organized</h1>
						<EntryBox>
							<input
								type="text"
								value={this.state.task}
								onChange={this.handleTask}
								onKeyPress={this.enterAdd}
							/>
							<Add onClick={this.addTask}>ADD</Add>
						</EntryBox>
						<Cards>
							{this.state.tasklist.map((i) => (
								<Card key={i.id}>
									<input type="checkbox" name="check" id={i.id} />
									<label htmlFor={i.id}>
										<span></span>
										<p>{i.taskName}</p>
									</label>
									<div>
										<button onClick={() => this.remove(i.id)}>
											<img
												src={remove}
												alt="remove"
												title="remove task"
											/>
										</button>
										<button
											onClick={() => this.edit(i.id, i.taskName)}
										>
											<img src={edit} alt="edit" title="edit task" />
										</button>
									</div>
								</Card>
							))}
						</Cards>
					</MainContainer>
				</Main>
			</>
		);
	}
}

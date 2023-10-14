const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Tasty React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	return (
		<main className="menu ">
			<h2>Our Menu</h2>
			<p>
				Authentic Italian pizza! All pizzas are homecooked in our stone
				oven with lots of love &hearts;
			</p>
			<ul className="pizzas">
				{/* <Pizza
					name="Focaccia"
					ingredients="Bread with italian olive oil and rosemary"
					price={18}
					photoName="pizzas/prosciutto.jpg"
					soldOut={false}
				/>
				<Pizza
					name="Pizza Margherita"
					ingredients="Tomato and mozarella"
					price={10}
					photoName="pizzas/margherita.jpg"
					soldOut={false}
				/> */}
				{pizzaData.map((pizza) => {
					return <Pizza pizzaObj={pizza} key={pizza.name} />;
				})}
			</ul>
		</main>
	);
}

function Pizza({ pizzaObj }) {
	return (
		<li className={pizzaObj.soldOut ? 'pizza sold-out' : 'pizza'}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const time = new Date().getHours();
	if (time >= 10 && time <= 21) {
		return (
			<footer className="footer order">
				{new Date().toLocaleTimeString()}. We are currently open!
				<div className="btn">Order Now!</div>
			</footer>
		);
	} else {
		return (
			<footer className="footer order">
				{new Date().toLocaleTimeString()}. Sorry! We're closed.
				{/* <div className="btn">Order Now!</div> */}
			</footer>
		);
	}
}
export default App;

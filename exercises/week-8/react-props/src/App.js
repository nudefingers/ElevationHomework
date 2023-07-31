import logo from './logo.svg';
import './App.css';
import Company from './components/Company';

function App() {
    const upperCase = name => name.toUpperCase()

    let companies = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }]

    return (
        <div>
            {companies.map(c =>
                <Company name={c.name} revenue={c.revenue} key={c.name}/>)}
        </div>
    )
}

export default App

function List ()
{

const fruits = [{name:"apple",calories:95,id:1},
                {name:"orange",calories:45,id:2},
                {name:"banana",calories:105,id:3},
                {name:"coconut",calories:159,id:4},
                {name:"pineapple",calories:36,id:5},
];

fruits.sort((a,b) => a.name.localeCompare(b.name))

const listitems = fruits.map(fruit => <li key={fruit.id}> {fruit.name}:
                                                           {fruit.calories}</li>)
return(<ul>{listitems}</ul>)
}

export default List;
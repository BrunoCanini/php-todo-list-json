<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="./style.css">
    <title>php-todo-list-json</title>
</head>
<body>

    <div id="app">
        <div>
            <ul v-for=" element in arrayDati">
                <li> {{ element.name }} {{ element.last_name }}</li>
            </ul>
        </div>
    </div>

    <script src="./main.js"></script>
    
</body>
</html>
# Домашнее задание 1

## Шаг 1

```shell
# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
```

[--action list](./picture/screenshot_1.png)

## Шаг 2

```shell
# Получаем контакт по id
node index.js --action get --id 5
```

[--action get](./picture/screenshot_2.png)

## Шаг 3

```shell
# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
```

[--action add](./picture/screenshot_3.png)

## Шаг 4

```shell
# Удаляем контакт
node index.js --action remove --id=1
```

[--action remove](./picture/screenshot_4.png)

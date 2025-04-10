# ⚛️ Ejercicios Prácticos con `useEffect` en React + Next.js

Esta colección de ejercicios está diseñada para ayudarte a entender y practicar el hook `useEffect` dentro de proyectos creados con **React** y **Next.js**.

Cada ejemplo cubre un caso de uso importante:
- ✅ Montaje del componente
- 🔄 Actualización cuando cambian variables
- 🧹 Limpieza en el desmontaje
- 🌐 Peticiones a APIs con `fetch`

---

## 📋 Lista de Ejercicios

| Nº | Componente         | Descripción                                                                 |
|----|---------------------|-----------------------------------------------------------------------------|
| 1️⃣ | `MensajeMontaje`   | Ejecutar código solo una vez cuando el componente se monta (`console.log`)  |
| 2️⃣ | `ContadorEfecto`   | Detectar y reaccionar a cambios en una variable de estado (`useState`)       |
| 3️⃣ | `Temporizador`     | Usar `setInterval` y limpiar el efecto al desmontar                         |
| 4️⃣ | `UsuariosAPI`      | Hacer `fetch` a una API y mostrar datos al montar el componente             |

---

## 1️⃣ Ejercicio 1: Mostrar mensaje al montar

**Objetivo:** Ejecutar un `console.log()` solo una vez al montar el componente.

### Instrucciones:
- Crea un componente llamado `MensajeMontaje`.
- Usa `useEffect` con un array vacío `[]` como dependencia.
- Muestra el mensaje `"Componente montado"` en consola.

# 2️⃣ Ejercicio 2: Contador con efecto en cambio de estado

Este ejercicio demuestra cómo usar `useEffect` junto con `useState` para reaccionar a los **cambios en el estado** de un componente en React + Next.js.

---

## 🎯 Objetivo

Detectar cambios en una variable de estado y ejecutar una acción cada vez que dicha variable cambie.

---

## 🛠 Instrucciones

1. Crear un componente llamado **`ContadorEfecto`**.
2. Usar `useState` para manejar un contador.
3. Usar `useEffect` para imprimir en consola un mensaje cada vez que el contador cambie.
4. Incluir `'use client';` en la parte superior del archivo para asegurar su ejecución en el cliente (Next.js 13+).

# 3️⃣ Ejercicio 3: Temporizador con limpieza al desmontar

Este ejercicio pone en práctica el uso de `setInterval` dentro de `useEffect` y cómo realizar una **limpieza adecuada** al desmontar el componente, evitando fugas de memoria o errores.

---

## 🎯 Objetivo

- Mostrar el número de segundos que han pasado desde que el componente se montó.
- Limpiar correctamente el `setInterval` cuando el componente se desmonte.

---

## 🛠 Instrucciones

1. Crea un componente llamado **`Temporizador`**.
2. Usa `useState` para guardar el número de segundos transcurridos.
3. Usa `useEffect` para iniciar un `setInterval` que actualice el estado cada segundo.
4. Devuelve una función de limpieza en el `useEffect` que detenga el intervalo con `clearInterval`.
5. No olvides el `'use client';` al inicio del archivo para que funcione con Next.js 13+.

# 4️⃣ Ejercicio 4: Fetch a una API y mostrar datos

Este ejercicio te permitirá practicar cómo hacer **peticiones HTTP** con `fetch` dentro de `useEffect`, al momento en que el componente se monta por primera vez.

---

## 🎯 Objetivo

- Hacer una petición a una API externa al montar el componente.
- Guardar los datos recibidos en el estado.
- Renderizar la información en pantalla.

---

## 🛠 Instrucciones

1. Crea un componente llamado **`UsuariosAPI`**.
2. Usa `useEffect` para hacer un `fetch` a:  
   👉 `https://jsonplaceholder.typicode.com/users`
3. Usa `useState` para guardar los usuarios.
4. Muestra los nombres de los usuarios en pantalla.
5. Asegúrate de agregar `'use client';` al inicio del archivo.
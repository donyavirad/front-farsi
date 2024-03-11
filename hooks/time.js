const timeHandler = (time) => {
    const date = new Date(time).toLocaleString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    return date
}

export {timeHandler}
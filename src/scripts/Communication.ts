let ip = "85.230.176.103:9001";
let n = 0;

function setIP(newIP: string) {
    ip = newIP;
}

function GETCount(): number {
    fetch("https://" + ip + "/counter", {})
        .then(response => response.json())
        .then(data => n = data.count);
    return n;
}

function POSTCount(n: number) {
    fetch("https://" + ip + "/counter/update", {
        method: 'POST',
        headers: { conetent: "application/json" },
        body: JSON.stringify({ upd: n })
    });
}

function PUTCount(n: number) {
    fetch("https://" + ip + "/counter/reset", {
        method: 'PUT',
        headers: { conetent: "application/json" },
        body: JSON.stringify({ val: n })
    });
}

//   increase = () => {
//     this.addToCount(1);
//     this.getCount();
// }

// decrease = () => {
//     this.addToCount(-1);
//     this.getCount();
// }

// updateCount = () => {
//     let s = (document.getElementById("textArea") as HTMLInputElement).value;
//     let n = +s;
//     this.setCount(n);
// }

// resetCounter = () => {
//     this.setCount(0);
//     this.getCount();
// }

export { GETCount, POSTCount, PUTCount, setIP }
const emailRef = document.querySelector(".email")
const statusRef = document.querySelector(".status")
const videoRef = document.querySelector(".video")

// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//   return response.json()
// }).then(data => {
//     emailRef.innerHTML = data.email
//   })

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve('VIP')
  })
}

function getVideo(subscriptionStatus) {
  return new Promise( (resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video")
    }
    else if (subscriptionStatus === "FREE") {
      resolve("show trailer")
    }
    else {
      reject("no video")
    }
  })
}

async function main() {
  const status = (await getSubscriptionStatus())
  statusRef.innerHTML = status
  try {
    console.log(await getVideo(status))
  }
  catch (e) {
    console.log(e)
    videoRef.innerHTML = e
  }
  
}

main()
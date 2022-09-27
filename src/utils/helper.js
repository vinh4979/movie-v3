export const lableMovie = (
  <>
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20,3H4C2.897,3,2,3.897,2,5v6v8c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-8V5C22,3.897,21.103,3,20,3z M20.001,9 C20,9,20,9,20.001,9h-0.466l-2.667-4H20L20.001,9z M9.535,9L6.868,5h2.597l2.667,4H9.535z M14.535,9l-2.667-4h2.597l2.667,4H14.535 z M4,5h0.465l2.667,4H4V5z M4,19v-8h16l0.002,8H4z"></path>
    </svg>
    Movie
  </>
)

export const lableCinema = (
  <>
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 384 512"
      class="null"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
    </svg>
    <p>Cinemas</p>
  </>
)

export const lableDate = (
  <>
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"></path>
    </svg>
    <p>Date</p>
  </>
)

export const movieDetailContent = [
  {
    id: 1,
    title: 'Directors: ',
    content: 'Anthony RussoJoe, Joe Russo'
  },

  {
    id: 1,
    title: 'Stars: ',
    content: 'Scarlett Johansson, Chris Evans, Mark Ruffalo, Chris Hem,...'
  },
  {
    id: 1,
    title: 'Genres: ',
    content: 'Action, Thriller, Crime'
  },
  {
    id: 1,
    title: 'Technology: ',
    content: '2D/Digitals'
  }
]

export const isEmail = value =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )

// fake duration movie
export const randomDuration = () =>
  Math.trunc(Math.random() * (200 - 120) + 120)

//fake imb movie
export const randomNumber = () => Math.trunc(Math.random() * (8 - 5) + 5)

// get today
export const today = (minusDay = 11) => {
  const toDay = new Date()
  toDay.setMonth(toDay.getMonth() - minusDay)
  return toDay
}

// check if date is today
export const isToday = someDate => {
  const today = new Date()
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  )
}
// check if date is yesterday
export const isYesterday = someDate => {
  const today = new Date()
  return (
    someDate.getDate() === today.getDate() - 1 &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  )
}

export const converDate = data => {
  const date = new Date(data)
  return date.toLocaleDateString()
}

export const loadingCineVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}
export const loadingScheduleVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

export const loadingVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

export const loadingVariants2 = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
}

export const loadingVariants3 = {
  hidden: {
    opacity: 0,
    x: 200
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
}

export const loadingVariants4 = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export const exitVariants = {
  opacity: 0,
  x: -200,
  y: 0,
  transition: { duration: 0.5 }
}

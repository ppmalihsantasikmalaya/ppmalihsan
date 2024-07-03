"use client"

import Certifications from "./_components/certifications"
import Profile from "./_components/profile"

export default function ProfilePage() {
  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-5">
        <Profile />
      </div>
      <div className="col-span-12 md:col-span-7">
        <Certifications />
      </div>
    </div>
  )
}

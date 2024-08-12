const Footer = () => {
	return (
		<footer className="" id="Footer">
			<div className="mx-auto w-full max-w-screen-xl px-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a href="#" className="flex items-center">
							<img
								src="/icons/AnonimUser.png"
								alt=""
								className="h-[4.5rem] w-[4.5rem] right-2 relative rounded-full brightness-200"
							/>
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
						</a>
					</div>
					<div className="grid grid-cols-2 gap-16">
						<div>
							<h2 className="mb-4 text-sm font-semibold uppercase text-white">CREATED BY</h2>
							<ul className="text-gray-400 dark:text-gray-400 font-medium">
								<li className="mb-2">
									<a href="https://www.instagram.com/_algoritma22/?hl=id" className="hover:underline">
										XII RPL 1
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-4 text-sm font-semibold uppercase text-white">Follow us</h2>
							<ul className="text-gray-400 dark:text-gray-400 font-medium">
								<li className="mb-2">
									<a href="https://www.instagram.com/_algoritma22/?hl=id" className="hover:underline ">
										Instagram
									</a>
								</li>
								<li>
									<a href="https://www.tiktok.com/@algoritma2022" className="hover:underline">
										Tiktok
									</a>
								</li>
							</ul>
						</div>
					</div>

				</div>
				<hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<div className="flex mt-4 justify-center sm:mt-0">
						<div className="text-[0.7rem] text-white opacity-70">
							© {new Date().getFullYear()} Kelas XII RPL 1 | Di Kelola Oleh Siswa RPL 1
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

const Faq = () => {
	return (
		<div id="faq" className="container my-10">
			<h2 className="text-4xl text-center my-6">Frequently asked questions?</h2>
			<div className="flex flex-col gap-y-2">
				<div className="collapse collapse-plus bg-base-200">
					<input type="radio" name="my-accordion-3" defaultChecked />
					<div className="collapse-title text-xl font-medium">
						What types of books does RR Book Store offer?
					</div>
					<div className="collapse-content">
						<p>
							RR Book Store offers a wide variety of books including fiction,
							non-fiction, children's books, young adult novels, academic
							textbooks, self-help, biographies, and more. We strive to provide
							a diverse collection to cater to readers of all ages and
							interests.
						</p>
					</div>
				</div>

				<div className="collapse collapse-plus bg-base-200">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						Does RR Book Store offer online shopping and delivery?
					</div>
					<div className="collapse-content">
						<p>
							Yes, RR Book Store offers online shopping through our website.
							Customers can browse our extensive catalog, make purchases, and
							have books delivered to their doorstep. We also provide options
							for in-store pickup if you prefer to collect your order in person.
						</p>
					</div>
				</div>

				<div className="collapse collapse-plus bg-base-200">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						Are there any membership or loyalty programs available at RR Book
						Store?
					</div>
					<div className="collapse-content">
						<p>
							Yes, RR Book Store has a loyalty program where members earn points
							on every purchase. These points can be redeemed for discounts on
							future purchases. Members also receive exclusive offers, early
							access to sales, and invitations to special events.
						</p>
					</div>
				</div>

				<div className="collapse collapse-plus bg-base-200">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						Does RR Book Store host any events or book signings?
					</div>
					<div className="collapse-content">
						<p>
							Absolutely! RR Book Store regularly hosts events including book
							signings, author talks, reading sessions, and book clubs. We
							believe in fostering a community of book lovers and providing
							opportunities for readers to engage with authors and each other.
						</p>
					</div>
				</div>

				<div className="collapse collapse-plus bg-base-200">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						Can I return or exchange a book at RR Book Store?
					</div>
					<div className="collapse-content">
						<p>
							Yes, we have a flexible return and exchange policy. Books can be
							returned or exchanged within 30 days of purchase, provided they
							are in their original condition and accompanied by a receipt.
							Certain conditions may apply, especially for special editions or
							clearance items. Please refer to our return policy on our website
							for detailed information.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Faq;

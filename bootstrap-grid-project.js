const mailbox = document.getElementById("mailbox");
const offcanvasPreviewElem = document.getElementById("offcanvas-preview");
const offcanvasPreview = new bootstrap.Offcanvas(offcanvasPreviewElem);

mailbox.addEventListener("click", evnt => {
    console.log(evnt.target)
    const parent = evnt.target.parentNode;

    const sender = parent.querySelector(".sender").innerHTML;
    const subject = parent.querySelector(".subject").innerHTML;
    const message = parent.querySelector("p:nth-child(3)").innerHTML;

    offcanvasPreviewElem.querySelector(".sender").innerHTML = sender;
    offcanvasPreviewElem.querySelector(".subject").innerHTML = subject;
    offcanvasPreviewElem.querySelector("p:nth-child(3)").innerHTML = message;

    if(parent.classList.contains("email-message") && window.innerWidth <= 992){
        offcanvasPreview.show();
    }
});

function createInboxItem(email) {
    const template = document.getElementById("email-message-template");
    const newMailboxItem = template.content.firstElementChild.cloneNode(true);

    newMailboxItem.querySelector(".sender").innerHTML = email.sender;
    newMailboxItem.querySelector(".subject").innerHTML = email.subject;
    newMailboxItem.querySelector("p:nth-child(3)").innerHTML = email.message;

    mailbox.querySelector("div").append(newMailboxItem);
};

var inboxItems = [
    {
        sender:     "Marcus Tullius Cicero",
        subject:    "Lorem ipsum",
        message:    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae dolore aliquid numquam? Nemo accusantium veritatis quibusdam optio velit asperiores recusandae quasi deserunt dolorem! Velit tempora illo dolore corrupti aspernatur."
    },
    {
        sender:     "Marcus Tullius Cicero",
        subject:    "Lorem ipsum",
        message:    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam provident itaque est hic nam expedita, quos repellat deserunt cumque atque asperiores nobis corporis sed assumenda! Ex quaerat veniam at fuga!"
    },
    {
        sender:     "Marcus Tullius Cicero",
        subject:    "Lorem ipsum",
        message:    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quae eligendi atque libero a sed dicta numquam aliquam aperiam eius vitae odit quam culpa, enim sequi. Omnis nemo quis sit."
    },
    {
        sender:     "Marcus Tullius Cicero",
        subject:    "Lorem ipsum",
        message:    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eligendi vero. Quos labore voluptas animi esse quas nemo in aliquid maiores officia eum sapiente quae distinctio veniam ducimus, iste non."
    },
    {
        sender:     "Marcus Tullius Cicero",
        subject:    "Lorem ipsum",
        message:    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro nobis rem consequuntur maxime sunt eveniet deserunt iure commodi nesciunt laboriosam corporis quae beatae asperiores, autem, aperiam id animi. Necessitatibus!"
    },
    {
        sender:     "Marcus Tullius Cicero",
        subject:    "Lorem ipsum",
        message:    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, enim labore beatae consectetur vel sunt earum iste illum officiis mollitia voluptates cumque, commodi vitae, est iusto sint ad deserunt aperiam."
    },
    {
        sender:     "Marcus Tullius Cicero",
        subject:    "Lorem ipsum",
        message:    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio rem, eos in ratione fugiat maxime minima dignissimos! Nam ut quae sint quas odio. Beatae facilis optio quas numquam omnis?"
    },
    {
        sender:     "Marcus Tullius Cicero",
        subject:    "Lorem ipsum",
        message:    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sequi fugiat porro reprehenderit eveniet voluptatibus facilis perferendis nobis praesentium sed dolor, dolorem officiis, aperiam obcaecati numquam laboriosam ipsum ea tempore."
    },
    {
        sender:     "Marcus Tullius Cicero",
        subject:    "Lorem ipsum",
        message:    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quibusdam eum dolorem eius porro, iste accusantium saepe sit exercitationem. Facilis nostrum maxime necessitatibus perferendis dolorem illo veritatis aperiam optio culpa."
    },
    {
        sender:     "Marcus Tullius Cicero",
        subject:    "Lorem ipsum",
        message:    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis nobis alias, cupiditate architecto deleniti facere sunt exercitationem natus atque fugiat sint porro pariatur, nostrum distinctio eum in ex. Quae, atque!"
    },
    {
        sender:     "Marcus Tullius Cicero",
        subject:    "Lorem ipsum",
        message:    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab earum labore rem doloremque rerum illum dicta, in delectus, maiores, culpa magni eius accusantium ipsum quo? Reprehenderit veniam veritatis illo nulla!"
    }
]

inboxItems.forEach(item => createInboxItem(item));

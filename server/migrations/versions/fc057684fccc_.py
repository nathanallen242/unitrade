"""empty message

Revision ID: fc057684fccc
Revises: dc7597593a9f
Create Date: 2023-10-22 19:39:01.175973

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fc057684fccc'
down_revision = 'dc7597593a9f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('chats', schema=None) as batch_op:
        batch_op.add_column(sa.Column('last_message', sa.Text(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('chats', schema=None) as batch_op:
        batch_op.drop_column('last_message')

    # ### end Alembic commands ###

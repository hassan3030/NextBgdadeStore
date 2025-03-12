import { NextRequest, NextResponse } from 'next/server';
import { articles} from '@/utils/data';
import { createArticleSchema } from '@/utils/validationSchemas';
import { CreateArticleDto } from '@/utils/dtos';
import { Article } from '@prisma/client';
import prisma from '@/utils/db';
import { ARTICLE_PER_PAGE } from '@/utils/constants';
import { verifyToken } from '@/utils/verifyToken';

/**
 *  @method  GET
 *  @route   ~/api/articles/:id
 *  @desc    Get Single Article By Id
 *  @access  public
 */
export async function GET(req: NextRequest , rse:NextResponse) {
    try {
        if (true) {
            console.log(articles);
            return NextResponse.json(articles, { status: 404 });
           
        }

    } catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        );
    }
}



/**
 *  @method  POST
 *  @route   ~/api/articles
 *  @desc    Create New Article
 *  @access  private (only admin can create article)
 */
export async function POST(request: NextRequest) {
  try {

    const body = (await request.json()) as CreateArticleDto;
    const newArticle: Article = await prisma.article.create({
      data: {
        title: body.title,
        description: body.description
      }
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    )
  }
}
/**
 *  @method  PUT
 *  @route   ~/api/articles/:id
 *  @desc    Update Article
 *  @access  private (only admin can update article)
 */
export async function PUT(request: NextRequest) {
   
}

/**
 *  @method  DELETE
 *  @route   ~/api/articles/:id
 *  @desc    Delete Article
 *  @access  private (only admin can delete article)
 */
export async function DELETE(request: NextRequest) {
    
}